<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.callbacks.CreateWorkflowFinalReportResponse;
import org.openapis.openapi.models.callbacks.CreateWorkflowMessageStatusResponse;
import org.openapis.openapi.models.operations.CreateWorkflowResponse;
import org.openapis.openapi.models.operations.CreateWorkflowSecurity;
import org.openapis.openapi.models.shared.AudioProperty;
import org.openapis.openapi.models.shared.CreateWorkflow;
import org.openapis.openapi.models.shared.CreateWorkflowTemplateEnum;
import org.openapis.openapi.models.shared.FailoverProperty;
import org.openapis.openapi.models.shared.FailoverPropertyConditionStatusEnum;
import org.openapis.openapi.models.shared.FileProperty;
import org.openapis.openapi.models.shared.FinalReport;
import org.openapis.openapi.models.shared.FinalReportLinks;
import org.openapis.openapi.models.shared.FinalReportLinksMessages;
import org.openapis.openapi.models.shared.FinalReportLinksMessagesChannelEnum;
import org.openapis.openapi.models.shared.FinalReportLinksMessagesStatusEnum;
import org.openapis.openapi.models.shared.FinalReportLinksMessagesUsage;
import org.openapis.openapi.models.shared.FinalReportLinksMessagesUsageCurrencyEnum;
import org.openapis.openapi.models.shared.FinalReportStatusEnum;
import org.openapis.openapi.models.shared.FinalReportTemplateEnum;
import org.openapis.openapi.models.shared.FinalReportUsage;
import org.openapis.openapi.models.shared.FinalReportUsageCurrencyEnum;
import org.openapis.openapi.models.shared.FromProperty;
import org.openapis.openapi.models.shared.FromPropertyTypeEnum;
import org.openapis.openapi.models.shared.ImageProperty;
import org.openapis.openapi.models.shared.MessageProperty;
import org.openapis.openapi.models.shared.MessagePropertyContent;
import org.openapis.openapi.models.shared.MessagePropertyContentTypeEnum;
import org.openapis.openapi.models.shared.MessagePropertyMessenger;
import org.openapis.openapi.models.shared.MessagePropertyMessengerCategoryEnum;
import org.openapis.openapi.models.shared.MessagePropertyViberServiceMsg;
import org.openapis.openapi.models.shared.MessagePropertyViberServiceMsgCategoryEnum;
import org.openapis.openapi.models.shared.MessagePropertyWhatsapp;
import org.openapis.openapi.models.shared.MessagePropertyWhatsappPolicyEnum;
import org.openapis.openapi.models.shared.MessageStatus;
import org.openapis.openapi.models.shared.MessageStatusError;
import org.openapis.openapi.models.shared.MessageStatusLinks;
import org.openapis.openapi.models.shared.MessageStatusLinksWorkflow;
import org.openapis.openapi.models.shared.MessageStatusStatusEnum;
import org.openapis.openapi.models.shared.MessageStatusUsage;
import org.openapis.openapi.models.shared.MessageStatusUsageCurrencyEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.SendMessage;
import org.openapis.openapi.models.shared.SendWithFailoverMessage;
import org.openapis.openapi.models.shared.TemplateProperty;
import org.openapis.openapi.models.shared.TemplatePropertyParameters;
import org.openapis.openapi.models.shared.ToProperty;
import org.openapis.openapi.models.shared.ToPropertyTypeEnum;
import org.openapis.openapi.models.shared.VideoProperty;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateWorkflow req = new CreateWorkflow() {{
                template = CreateWorkflowTemplateEnum.FAILOVER;
                workflow = new Object[]{{
                    add(new SendMessage(                new FromProperty(FromPropertyTypeEnum.SMS) {{
                                        id = "0123456789012345";
                                        number = "447700900000";
                                    }};,                 new MessageProperty(                new MessagePropertyContent(MessagePropertyContentTypeEnum.TEXT) {{
                                                        audio = new AudioProperty() {{
                                                            url = "https://example.com/audio.mp3";
                                                        }};;
                                                        file = new FileProperty() {{
                                                            caption = "Additional text to accompany the image.";
                                                            url = "https://example.com/file.zip";
                                                        }};;
                                                        image = new ImageProperty() {{
                                                            caption = "Additional text to accompany the image.";
                                                            url = "https://example.com/image.jpg";
                                                        }};;
                                                        template = new TemplateProperty() {{
                                                            name = "whatsapp:hsm:technology:vonage:verify";
                                                            parameters = new org.openapis.openapi.models.shared.TemplatePropertyParameters[]{{
                                                                add(new TemplatePropertyParameters() {{
                                                                    default_ = "1234";
                                                                }}),
                                                                add(new TemplatePropertyParameters() {{
                                                                    default_ = "1234";
                                                                }}),
                                                                add(new TemplatePropertyParameters() {{
                                                                    default_ = "1234";
                                                                }}),
                                                            }};
                                                        }};;
                                                        text = "Vonage Verification code: 64873. Valid for 10 minutes.";
                                                        video = new VideoProperty() {{
                                                            url = "https://example.com/video.mp4";
                                                        }};;
                                                    }};) {{
                                        messenger = new MessagePropertyMessenger() {{
                                            category = MessagePropertyMessengerCategoryEnum.MESSAGE_TAG;
                                            tag = "ticket_update";
                                        }};;
                                        viberServiceMsg = new MessagePropertyViberServiceMsg() {{
                                            category = MessagePropertyViberServiceMsgCategoryEnum.TRANSACTION;
                                            ttl = 600L;
                                        }};;
                                        whatsapp = new MessagePropertyWhatsapp() {{
                                            locale = "en-GB";
                                            policy = MessagePropertyWhatsappPolicyEnum.DETERMINISTIC;
                                        }};;
                                    }};,                 new ToProperty(ToPropertyTypeEnum.SMS) {{
                                        id = "0123456789012345";
                                        number = "447700900000";
                                    }};) {{
                        from = new FromProperty(FromPropertyTypeEnum.SMS) {{
                            id = "0123456789012345";
                            number = "447700900000";
                            type = FromPropertyTypeEnum.SMS;
                        }};
                        message = new MessageProperty(                new MessagePropertyContent(MessagePropertyContentTypeEnum.TEXT) {{
                                            audio = new AudioProperty() {{
                                                url = "https://example.com/audio.mp3";
                                            }};;
                                            file = new FileProperty() {{
                                                caption = "Additional text to accompany the image.";
                                                url = "https://example.com/file.zip";
                                            }};;
                                            image = new ImageProperty() {{
                                                caption = "Additional text to accompany the image.";
                                                url = "https://example.com/image.jpg";
                                            }};;
                                            template = new TemplateProperty() {{
                                                name = "whatsapp:hsm:technology:vonage:verify";
                                                parameters = new org.openapis.openapi.models.shared.TemplatePropertyParameters[]{{
                                                    add(new TemplatePropertyParameters() {{
                                                        default_ = "1234";
                                                    }}),
                                                    add(new TemplatePropertyParameters() {{
                                                        default_ = "1234";
                                                    }}),
                                                    add(new TemplatePropertyParameters() {{
                                                        default_ = "1234";
                                                    }}),
                                                    add(new TemplatePropertyParameters() {{
                                                        default_ = "1234";
                                                    }}),
                                                }};
                                            }};;
                                            text = "Vonage Verification code: 64873. Valid for 10 minutes.";
                                            video = new VideoProperty() {{
                                                url = "https://example.com/video.mp4";
                                            }};;
                                        }};) {{
                            content = new MessagePropertyContent(MessagePropertyContentTypeEnum.TEXT) {{
                                audio = new AudioProperty() {{
                                    url = "https://example.com/audio.mp3";
                                }};
                                file = new FileProperty() {{
                                    caption = "Additional text to accompany the image.";
                                    url = "https://example.com/file.zip";
                                }};
                                image = new ImageProperty() {{
                                    caption = "Additional text to accompany the image.";
                                    url = "https://example.com/image.jpg";
                                }};
                                template = new TemplateProperty() {{
                                    name = "whatsapp:hsm:technology:vonage:verify";
                                    parameters = new org.openapis.openapi.models.shared.TemplatePropertyParameters[]{{
                                        add(new TemplatePropertyParameters() {{
                                            default_ = "1234";
                                        }}),
                                        add(new TemplatePropertyParameters() {{
                                            default_ = "1234";
                                        }}),
                                        add(new TemplatePropertyParameters() {{
                                            default_ = "1234";
                                        }}),
                                    }};
                                }};
                                text = "Vonage Verification code: 64873. Valid for 10 minutes.";
                                type = MessagePropertyContentTypeEnum.TEXT;
                                video = new VideoProperty() {{
                                    url = "https://example.com/video.mp4";
                                }};
                            }};
                            messenger = new MessagePropertyMessenger() {{
                                category = MessagePropertyMessengerCategoryEnum.MESSAGE_TAG;
                                tag = "ticket_update";
                            }};
                            viberServiceMsg = new MessagePropertyViberServiceMsg() {{
                                category = MessagePropertyViberServiceMsgCategoryEnum.TRANSACTION;
                                ttl = 600L;
                            }};
                            whatsapp = new MessagePropertyWhatsapp() {{
                                locale = "en-GB";
                                policy = MessagePropertyWhatsappPolicyEnum.DETERMINISTIC;
                            }};
                        }};
                        to = new ToProperty(ToPropertyTypeEnum.SMS) {{
                            id = "0123456789012345";
                            number = "447700900000";
                            type = ToPropertyTypeEnum.SMS;
                        }};
                    }}),
                    add(new SendMessage(                new FromProperty(FromPropertyTypeEnum.SMS) {{
                                        id = "0123456789012345";
                                        number = "447700900000";
                                    }};,                 new MessageProperty(                new MessagePropertyContent(MessagePropertyContentTypeEnum.TEXT) {{
                                                        audio = new AudioProperty() {{
                                                            url = "https://example.com/audio.mp3";
                                                        }};;
                                                        file = new FileProperty() {{
                                                            caption = "Additional text to accompany the image.";
                                                            url = "https://example.com/file.zip";
                                                        }};;
                                                        image = new ImageProperty() {{
                                                            caption = "Additional text to accompany the image.";
                                                            url = "https://example.com/image.jpg";
                                                        }};;
                                                        template = new TemplateProperty() {{
                                                            name = "whatsapp:hsm:technology:vonage:verify";
                                                            parameters = new org.openapis.openapi.models.shared.TemplatePropertyParameters[]{{
                                                                add(new TemplatePropertyParameters() {{
                                                                    default_ = "1234";
                                                                }}),
                                                                add(new TemplatePropertyParameters() {{
                                                                    default_ = "1234";
                                                                }}),
                                                            }};
                                                        }};;
                                                        text = "Vonage Verification code: 64873. Valid for 10 minutes.";
                                                        video = new VideoProperty() {{
                                                            url = "https://example.com/video.mp4";
                                                        }};;
                                                    }};) {{
                                        messenger = new MessagePropertyMessenger() {{
                                            category = MessagePropertyMessengerCategoryEnum.MESSAGE_TAG;
                                            tag = "ticket_update";
                                        }};;
                                        viberServiceMsg = new MessagePropertyViberServiceMsg() {{
                                            category = MessagePropertyViberServiceMsgCategoryEnum.TRANSACTION;
                                            ttl = 600L;
                                        }};;
                                        whatsapp = new MessagePropertyWhatsapp() {{
                                            locale = "en-GB";
                                            policy = MessagePropertyWhatsappPolicyEnum.DETERMINISTIC;
                                        }};;
                                    }};,                 new ToProperty(ToPropertyTypeEnum.SMS) {{
                                        id = "0123456789012345";
                                        number = "447700900000";
                                    }};) {{
                        from = new FromProperty(FromPropertyTypeEnum.SMS) {{
                            id = "0123456789012345";
                            number = "447700900000";
                            type = FromPropertyTypeEnum.SMS;
                        }};
                        message = new MessageProperty(                new MessagePropertyContent(MessagePropertyContentTypeEnum.TEXT) {{
                                            audio = new AudioProperty() {{
                                                url = "https://example.com/audio.mp3";
                                            }};;
                                            file = new FileProperty() {{
                                                caption = "Additional text to accompany the image.";
                                                url = "https://example.com/file.zip";
                                            }};;
                                            image = new ImageProperty() {{
                                                caption = "Additional text to accompany the image.";
                                                url = "https://example.com/image.jpg";
                                            }};;
                                            template = new TemplateProperty() {{
                                                name = "whatsapp:hsm:technology:vonage:verify";
                                                parameters = new org.openapis.openapi.models.shared.TemplatePropertyParameters[]{{
                                                    add(new TemplatePropertyParameters() {{
                                                        default_ = "1234";
                                                    }}),
                                                    add(new TemplatePropertyParameters() {{
                                                        default_ = "1234";
                                                    }}),
                                                    add(new TemplatePropertyParameters() {{
                                                        default_ = "1234";
                                                    }}),
                                                    add(new TemplatePropertyParameters() {{
                                                        default_ = "1234";
                                                    }}),
                                                }};
                                            }};;
                                            text = "Vonage Verification code: 64873. Valid for 10 minutes.";
                                            video = new VideoProperty() {{
                                                url = "https://example.com/video.mp4";
                                            }};;
                                        }};) {{
                            content = new MessagePropertyContent(MessagePropertyContentTypeEnum.TEXT) {{
                                audio = new AudioProperty() {{
                                    url = "https://example.com/audio.mp3";
                                }};
                                file = new FileProperty() {{
                                    caption = "Additional text to accompany the image.";
                                    url = "https://example.com/file.zip";
                                }};
                                image = new ImageProperty() {{
                                    caption = "Additional text to accompany the image.";
                                    url = "https://example.com/image.jpg";
                                }};
                                template = new TemplateProperty() {{
                                    name = "whatsapp:hsm:technology:vonage:verify";
                                    parameters = new org.openapis.openapi.models.shared.TemplatePropertyParameters[]{{
                                        add(new TemplatePropertyParameters() {{
                                            default_ = "1234";
                                        }}),
                                        add(new TemplatePropertyParameters() {{
                                            default_ = "1234";
                                        }}),
                                        add(new TemplatePropertyParameters() {{
                                            default_ = "1234";
                                        }}),
                                    }};
                                }};
                                text = "Vonage Verification code: 64873. Valid for 10 minutes.";
                                type = MessagePropertyContentTypeEnum.TEXT;
                                video = new VideoProperty() {{
                                    url = "https://example.com/video.mp4";
                                }};
                            }};
                            messenger = new MessagePropertyMessenger() {{
                                category = MessagePropertyMessengerCategoryEnum.MESSAGE_TAG;
                                tag = "ticket_update";
                            }};
                            viberServiceMsg = new MessagePropertyViberServiceMsg() {{
                                category = MessagePropertyViberServiceMsgCategoryEnum.TRANSACTION;
                                ttl = 600L;
                            }};
                            whatsapp = new MessagePropertyWhatsapp() {{
                                locale = "en-GB";
                                policy = MessagePropertyWhatsappPolicyEnum.DETERMINISTIC;
                            }};
                        }};
                        to = new ToProperty(ToPropertyTypeEnum.SMS) {{
                            id = "0123456789012345";
                            number = "447700900000";
                            type = ToPropertyTypeEnum.SMS;
                        }};
                    }}),
                    add(new SendMessage(                new FromProperty(FromPropertyTypeEnum.SMS) {{
                                        id = "0123456789012345";
                                        number = "447700900000";
                                    }};,                 new MessageProperty(                new MessagePropertyContent(MessagePropertyContentTypeEnum.TEXT) {{
                                                        audio = new AudioProperty() {{
                                                            url = "https://example.com/audio.mp3";
                                                        }};;
                                                        file = new FileProperty() {{
                                                            caption = "Additional text to accompany the image.";
                                                            url = "https://example.com/file.zip";
                                                        }};;
                                                        image = new ImageProperty() {{
                                                            caption = "Additional text to accompany the image.";
                                                            url = "https://example.com/image.jpg";
                                                        }};;
                                                        template = new TemplateProperty() {{
                                                            name = "whatsapp:hsm:technology:vonage:verify";
                                                            parameters = new org.openapis.openapi.models.shared.TemplatePropertyParameters[]{{
                                                                add(new TemplatePropertyParameters() {{
                                                                    default_ = "1234";
                                                                }}),
                                                                add(new TemplatePropertyParameters() {{
                                                                    default_ = "1234";
                                                                }}),
                                                            }};
                                                        }};;
                                                        text = "Vonage Verification code: 64873. Valid for 10 minutes.";
                                                        video = new VideoProperty() {{
                                                            url = "https://example.com/video.mp4";
                                                        }};;
                                                    }};) {{
                                        messenger = new MessagePropertyMessenger() {{
                                            category = MessagePropertyMessengerCategoryEnum.MESSAGE_TAG;
                                            tag = "ticket_update";
                                        }};;
                                        viberServiceMsg = new MessagePropertyViberServiceMsg() {{
                                            category = MessagePropertyViberServiceMsgCategoryEnum.TRANSACTION;
                                            ttl = 600L;
                                        }};;
                                        whatsapp = new MessagePropertyWhatsapp() {{
                                            locale = "en-GB";
                                            policy = MessagePropertyWhatsappPolicyEnum.DETERMINISTIC;
                                        }};;
                                    }};,                 new ToProperty(ToPropertyTypeEnum.SMS) {{
                                        id = "0123456789012345";
                                        number = "447700900000";
                                    }};) {{
                        from = new FromProperty(FromPropertyTypeEnum.SMS) {{
                            id = "0123456789012345";
                            number = "447700900000";
                            type = FromPropertyTypeEnum.SMS;
                        }};
                        message = new MessageProperty(                new MessagePropertyContent(MessagePropertyContentTypeEnum.TEXT) {{
                                            audio = new AudioProperty() {{
                                                url = "https://example.com/audio.mp3";
                                            }};;
                                            file = new FileProperty() {{
                                                caption = "Additional text to accompany the image.";
                                                url = "https://example.com/file.zip";
                                            }};;
                                            image = new ImageProperty() {{
                                                caption = "Additional text to accompany the image.";
                                                url = "https://example.com/image.jpg";
                                            }};;
                                            template = new TemplateProperty() {{
                                                name = "whatsapp:hsm:technology:vonage:verify";
                                                parameters = new org.openapis.openapi.models.shared.TemplatePropertyParameters[]{{
                                                    add(new TemplatePropertyParameters() {{
                                                        default_ = "1234";
                                                    }}),
                                                    add(new TemplatePropertyParameters() {{
                                                        default_ = "1234";
                                                    }}),
                                                }};
                                            }};;
                                            text = "Vonage Verification code: 64873. Valid for 10 minutes.";
                                            video = new VideoProperty() {{
                                                url = "https://example.com/video.mp4";
                                            }};;
                                        }};) {{
                            content = new MessagePropertyContent(MessagePropertyContentTypeEnum.TEXT) {{
                                audio = new AudioProperty() {{
                                    url = "https://example.com/audio.mp3";
                                }};
                                file = new FileProperty() {{
                                    caption = "Additional text to accompany the image.";
                                    url = "https://example.com/file.zip";
                                }};
                                image = new ImageProperty() {{
                                    caption = "Additional text to accompany the image.";
                                    url = "https://example.com/image.jpg";
                                }};
                                template = new TemplateProperty() {{
                                    name = "whatsapp:hsm:technology:vonage:verify";
                                    parameters = new org.openapis.openapi.models.shared.TemplatePropertyParameters[]{{
                                        add(new TemplatePropertyParameters() {{
                                            default_ = "1234";
                                        }}),
                                        add(new TemplatePropertyParameters() {{
                                            default_ = "1234";
                                        }}),
                                        add(new TemplatePropertyParameters() {{
                                            default_ = "1234";
                                        }}),
                                    }};
                                }};
                                text = "Vonage Verification code: 64873. Valid for 10 minutes.";
                                type = MessagePropertyContentTypeEnum.TEXT;
                                video = new VideoProperty() {{
                                    url = "https://example.com/video.mp4";
                                }};
                            }};
                            messenger = new MessagePropertyMessenger() {{
                                category = MessagePropertyMessengerCategoryEnum.MESSAGE_TAG;
                                tag = "ticket_update";
                            }};
                            viberServiceMsg = new MessagePropertyViberServiceMsg() {{
                                category = MessagePropertyViberServiceMsgCategoryEnum.TRANSACTION;
                                ttl = 600L;
                            }};
                            whatsapp = new MessagePropertyWhatsapp() {{
                                locale = "en-GB";
                                policy = MessagePropertyWhatsappPolicyEnum.DETERMINISTIC;
                            }};
                        }};
                        to = new ToProperty(ToPropertyTypeEnum.SMS) {{
                            id = "0123456789012345";
                            number = "447700900000";
                            type = ToPropertyTypeEnum.SMS;
                        }};
                    }}),
                }};
            }};            

            CreateWorkflowResponse res = sdk.createWorkflow(req, new CreateWorkflowSecurity() {{
                basicAuth = new SchemeBasicAuth("magnam", "debitis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.response != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->