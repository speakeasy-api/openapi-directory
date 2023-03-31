# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/nexmo.com/dispatch/0.3.4/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.CreateWorkflow(
    template="failover",
    workflow=[
        shared.SendMessage(
            from_=shared.FromProperty(
                id="0123456789012345",
                number="447700900000",
                type="sms",
            ),
            message=shared.MessageProperty(
                content=shared.MessagePropertyContent(
                    audio=shared.AudioProperty(
                        url="https://example.com/audio.mp3",
                    ),
                    file=shared.FileProperty(
                        caption="Additional text to accompany the image.",
                        url="https://example.com/file.zip",
                    ),
                    image=shared.ImageProperty(
                        caption="Additional text to accompany the image.",
                        url="https://example.com/image.jpg",
                    ),
                    template=shared.TemplateProperty(
                        name="whatsapp:hsm:technology:vonage:verify",
                        parameters=[
                            shared.TemplatePropertyParameters(
                                default="1234",
                            ),
                            shared.TemplatePropertyParameters(
                                default="1234",
                            ),
                            shared.TemplatePropertyParameters(
                                default="1234",
                            ),
                        ],
                    ),
                    text="Vonage Verification code: 64873. Valid for 10 minutes.",
                    type="text",
                    video=shared.VideoProperty(
                        url="https://example.com/video.mp4",
                    ),
                ),
                messenger=shared.MessagePropertyMessenger(
                    category="message_tag",
                    tag="ticket_update",
                ),
                viber_service_msg=shared.MessagePropertyViberServiceMsg(
                    category="transaction",
                    ttl=600,
                ),
                whatsapp=shared.MessagePropertyWhatsapp(
                    locale="en-GB",
                    policy="deterministic",
                ),
            ),
            to=shared.ToProperty(
                id="0123456789012345",
                number="447700900000",
                type="sms",
            ),
        ),
        shared.SendMessage(
            from_=shared.FromProperty(
                id="0123456789012345",
                number="447700900000",
                type="sms",
            ),
            message=shared.MessageProperty(
                content=shared.MessagePropertyContent(
                    audio=shared.AudioProperty(
                        url="https://example.com/audio.mp3",
                    ),
                    file=shared.FileProperty(
                        caption="Additional text to accompany the image.",
                        url="https://example.com/file.zip",
                    ),
                    image=shared.ImageProperty(
                        caption="Additional text to accompany the image.",
                        url="https://example.com/image.jpg",
                    ),
                    template=shared.TemplateProperty(
                        name="whatsapp:hsm:technology:vonage:verify",
                        parameters=[
                            shared.TemplatePropertyParameters(
                                default="1234",
                            ),
                            shared.TemplatePropertyParameters(
                                default="1234",
                            ),
                            shared.TemplatePropertyParameters(
                                default="1234",
                            ),
                        ],
                    ),
                    text="Vonage Verification code: 64873. Valid for 10 minutes.",
                    type="text",
                    video=shared.VideoProperty(
                        url="https://example.com/video.mp4",
                    ),
                ),
                messenger=shared.MessagePropertyMessenger(
                    category="message_tag",
                    tag="ticket_update",
                ),
                viber_service_msg=shared.MessagePropertyViberServiceMsg(
                    category="transaction",
                    ttl=600,
                ),
                whatsapp=shared.MessagePropertyWhatsapp(
                    locale="en-GB",
                    policy="deterministic",
                ),
            ),
            to=shared.ToProperty(
                id="0123456789012345",
                number="447700900000",
                type="sms",
            ),
        ),
        shared.SendMessage(
            from_=shared.FromProperty(
                id="0123456789012345",
                number="447700900000",
                type="sms",
            ),
            message=shared.MessageProperty(
                content=shared.MessagePropertyContent(
                    audio=shared.AudioProperty(
                        url="https://example.com/audio.mp3",
                    ),
                    file=shared.FileProperty(
                        caption="Additional text to accompany the image.",
                        url="https://example.com/file.zip",
                    ),
                    image=shared.ImageProperty(
                        caption="Additional text to accompany the image.",
                        url="https://example.com/image.jpg",
                    ),
                    template=shared.TemplateProperty(
                        name="whatsapp:hsm:technology:vonage:verify",
                        parameters=[
                            shared.TemplatePropertyParameters(
                                default="1234",
                            ),
                            shared.TemplatePropertyParameters(
                                default="1234",
                            ),
                            shared.TemplatePropertyParameters(
                                default="1234",
                            ),
                        ],
                    ),
                    text="Vonage Verification code: 64873. Valid for 10 minutes.",
                    type="text",
                    video=shared.VideoProperty(
                        url="https://example.com/video.mp4",
                    ),
                ),
                messenger=shared.MessagePropertyMessenger(
                    category="message_tag",
                    tag="ticket_update",
                ),
                viber_service_msg=shared.MessagePropertyViberServiceMsg(
                    category="transaction",
                    ttl=600,
                ),
                whatsapp=shared.MessagePropertyWhatsapp(
                    locale="en-GB",
                    policy="deterministic",
                ),
            ),
            to=shared.ToProperty(
                id="0123456789012345",
                number="447700900000",
                type="sms",
            ),
        ),
    ],
)
    
res = s.create_workflow(req, operations.CreateWorkflowSecurity(
    basic_auth=shared.SchemeBasicAuth(
        password="YOUR_PASSWORD_HERE",
        username="YOUR_USERNAME_HERE",
    ),
))

if res.response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_workflow` - Create a workflow
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
