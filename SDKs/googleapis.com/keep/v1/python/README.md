# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/keep/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.KeepNotesCreateRequest(
    dollar_xgafv="2",
    note_input=shared.NoteInput(
        body=shared.Section(
            list_=shared.ListContent(
                list_items=[
                    shared.ListItem(
                        checked=False,
                        child_list_items=[
                            shared.ListItem(),
                            shared.ListItem(),
                            shared.ListItem(),
                        ],
                        text=shared.TextContent(
                            text="quibusdam",
                        ),
                    ),
                    shared.ListItem(
                        checked=False,
                        child_list_items=[
                            shared.ListItem(),
                            shared.ListItem(),
                            shared.ListItem(),
                        ],
                        text=shared.TextContent(
                            text="nulla",
                        ),
                    ),
                    shared.ListItem(
                        checked=False,
                        child_list_items=[
                            shared.ListItem(),
                            shared.ListItem(),
                            shared.ListItem(),
                        ],
                        text=shared.TextContent(
                            text="illum",
                        ),
                    ),
                ],
            ),
            text=shared.TextContent(
                text="vel",
            ),
        ),
        title="Miss",
    ),
    access_token="deserunt",
    alt="media",
    callback="iure",
    fields_="magnam",
    key="debitis",
    oauth_token="ipsa",
    pretty_print=False,
    quota_user="delectus",
    upload_type="tempora",
    upload_protocol="suscipit",
)
    
res = s.notes.keep_notes_create(req, operations.KeepNotesCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.note is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### notes

* `keep_notes_create` - Creates a new note.
* `keep_notes_delete` - Deletes a note. Caller must have the `OWNER` role on the note to delete. Deleting a note removes the resource immediately and cannot be undone. Any collaborators will lose access to the note.
* `keep_notes_get` - Gets a note.
* `keep_notes_list` - Lists notes. Every list call returns a page of results with `page_size` as the upper bound of returned items. A `page_size` of zero allows the server to choose the upper bound. The ListNotesResponse contains at most `page_size` entries. If there are more things left to list, it provides a `next_page_token` value. (Page tokens are opaque values.) To get the next page of results, copy the result's `next_page_token` into the next request's `page_token`. Repeat until the `next_page_token` returned with a page of results is empty. ListNotes return consistent results in the face of concurrent changes, or signals that it cannot with an ABORTED error.
* `keep_notes_permissions_batch_create` - Creates one or more permissions on the note. Only permissions with the `WRITER` role may be created. If adding any permission fails, then the entire request fails and no changes are made.
* `keep_notes_permissions_batch_delete` - Deletes one or more permissions on the note. The specified entities will immediately lose access. A permission with the `OWNER` role can't be removed. If removing a permission fails, then the entire request fails and no changes are made. Returns a 400 bad request error if a specified permission does not exist on the note.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
