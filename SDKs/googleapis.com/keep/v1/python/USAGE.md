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