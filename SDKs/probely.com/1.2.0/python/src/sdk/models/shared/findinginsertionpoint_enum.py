import dataclasses
from enum import Enum

class FindingInsertionPointEnum(str, Enum):
    COOKIE = "cookie"
    HEADER = "header"
    PARAMETER = "parameter"
    ARBITRARY_URL_PARAM_NAME = "arbitrary_url_param_name"
    URL_PATH_FOLDER = "url_path_folder"
    UNKNOWN = ""

