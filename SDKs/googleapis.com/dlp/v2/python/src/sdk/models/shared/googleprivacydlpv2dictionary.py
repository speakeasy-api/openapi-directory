"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import googleprivacydlpv2cloudstoragepath as shared_googleprivacydlpv2cloudstoragepath
from ..shared import googleprivacydlpv2wordlist as shared_googleprivacydlpv2wordlist
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GooglePrivacyDlpV2Dictionary:
    r"""Custom information type based on a dictionary of words or phrases. This can be used to match sensitive information specific to the data, such as a list of employee IDs or job titles. Dictionary words are case-insensitive and all characters other than letters and digits in the unicode [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane) will be replaced with whitespace when scanning for matches, so the dictionary phrase \\"Sam Johnson\\" will match all three phrases \\"sam johnson\\", \\"Sam, Johnson\\", and \\"Sam (Johnson)\\". Additionally, the characters surrounding any match must be of a different type than the adjacent characters within the word, so letters must be next to non-letters and digits next to non-digits. For example, the dictionary word \\"jen\\" will match the first three letters of the text \\"jen123\\" but will return no matches for \\"jennifer\\". Dictionary words containing a large number of characters that are not letters or digits may result in unexpected findings because such characters are treated as whitespace. The [limits](https://cloud.google.com/dlp/limits) page contains details about the size limits of dictionaries. For dictionaries that do not fit within these constraints, consider using `LargeCustomDictionaryConfig` in the `StoredInfoType` API."""
    
    cloud_storage_path: Optional[shared_googleprivacydlpv2cloudstoragepath.GooglePrivacyDlpV2CloudStoragePath] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('cloudStoragePath'), 'exclude': lambda f: f is None }})
    r"""Message representing a single file or path in Cloud Storage."""  
    word_list: Optional[shared_googleprivacydlpv2wordlist.GooglePrivacyDlpV2WordList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('wordList'), 'exclude': lambda f: f is None }})
    r"""Message defining a list of words or phrases to search for in the data."""  
    