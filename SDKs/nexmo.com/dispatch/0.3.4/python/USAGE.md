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