# channels

### Available Operations

* [youtubeChannelsList](#youtubechannelslist) - Retrieves a list of resources, possibly filtered.
* [youtubeChannelsUpdate](#youtubechannelsupdate) - Updates an existing resource.

## youtubeChannelsList

Retrieves a list of resources, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeChannelsListRequest;
import org.openapis.openapi.models.operations.YoutubeChannelsListResponse;
import org.openapis.openapi.models.operations.YoutubeChannelsListSecurity;
import org.openapis.openapi.models.operations.YoutubeChannelsListSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeChannelsListSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeChannelsListSecurityOption3;
import org.openapis.openapi.models.operations.YoutubeChannelsListSecurityOption4;
import org.openapis.openapi.models.operations.YoutubeChannelsListSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeChannelsListRequest req = new YoutubeChannelsListRequest(                new String[]{{
                                add("ullam"),
                                add("nisi"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatum";
                alt = AltEnum.JSON;
                callback = "quibusdam";
                categoryId = "ex";
                fields = "deleniti";
                forUsername = "itaque";
                hl = "dolorum";
                id = new String[]{{
                    add("omnis"),
                }};
                key = "tenetur";
                managedByMe = false;
                maxResults = 98478L;
                mine = false;
                mySubscribers = false;
                oauthToken = "at";
                onBehalfOfContentOwner = "et";
                pageToken = "voluptate";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "minima";
                uploadProtocol = "veritatis";
            }};            

            YoutubeChannelsListResponse res = sdk.channels.youtubeChannelsList(req, new YoutubeChannelsListSecurity() {{
                option1 = new YoutubeChannelsListSecurityOption1("consectetur", "adipisci") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.channelListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubeChannelsUpdate

Updates an existing resource.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubeChannelsUpdateRequest;
import org.openapis.openapi.models.operations.YoutubeChannelsUpdateResponse;
import org.openapis.openapi.models.operations.YoutubeChannelsUpdateSecurity;
import org.openapis.openapi.models.operations.YoutubeChannelsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.YoutubeChannelsUpdateSecurityOption2;
import org.openapis.openapi.models.operations.YoutubeChannelsUpdateSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Channel;
import org.openapis.openapi.models.shared.ChannelAuditDetails;
import org.openapis.openapi.models.shared.ChannelBrandingSettings;
import org.openapis.openapi.models.shared.ChannelContentDetails;
import org.openapis.openapi.models.shared.ChannelContentDetailsRelatedPlaylists;
import org.openapis.openapi.models.shared.ChannelContentOwnerDetails;
import org.openapis.openapi.models.shared.ChannelConversionPing;
import org.openapis.openapi.models.shared.ChannelConversionPingContextEnum;
import org.openapis.openapi.models.shared.ChannelConversionPings;
import org.openapis.openapi.models.shared.ChannelLocalization;
import org.openapis.openapi.models.shared.ChannelSettings;
import org.openapis.openapi.models.shared.ChannelSnippet;
import org.openapis.openapi.models.shared.ChannelStatistics;
import org.openapis.openapi.models.shared.ChannelStatus;
import org.openapis.openapi.models.shared.ChannelStatusLongUploadsStatusEnum;
import org.openapis.openapi.models.shared.ChannelStatusPrivacyStatusEnum;
import org.openapis.openapi.models.shared.ChannelTopicDetails;
import org.openapis.openapi.models.shared.ImageSettings;
import org.openapis.openapi.models.shared.LanguageTag;
import org.openapis.openapi.models.shared.LocalizedProperty;
import org.openapis.openapi.models.shared.LocalizedString;
import org.openapis.openapi.models.shared.PropertyValue;
import org.openapis.openapi.models.shared.Thumbnail;
import org.openapis.openapi.models.shared.ThumbnailDetails;
import org.openapis.openapi.models.shared.WatchSettings;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubeChannelsUpdateRequest req = new YoutubeChannelsUpdateRequest(                new String[]{{
                                add("temporibus"),
                                add("accusantium"),
                                add("rem"),
                            }}) {{
                dollarXgafv = XgafvEnum.ONE;
                channel = new Channel() {{
                    auditDetails = new ChannelAuditDetails() {{
                        communityGuidelinesGoodStanding = false;
                        contentIdClaimsGoodStanding = false;
                        copyrightStrikesGoodStanding = false;
                    }};;
                    brandingSettings = new ChannelBrandingSettings() {{
                        channel = new ChannelSettings() {{
                            country = "Luxembourg";
                            defaultLanguage = "eum";
                            defaultTab = "mollitia";
                            description = "ab";
                            featuredChannelsTitle = "corrupti";
                            featuredChannelsUrls = new String[]{{
                                add("voluptatem"),
                                add("dolor"),
                            }};
                            keywords = "occaecati";
                            moderateComments = false;
                            profileColor = "numquam";
                            showBrowseView = false;
                            showRelatedChannels = false;
                            title = "Miss";
                            trackingAnalyticsAccountId = "explicabo";
                            unsubscribedTrailer = "voluptas";
                        }};;
                        hints = new org.openapis.openapi.models.shared.PropertyValue[]{{
                            add(new PropertyValue() {{
                                property = "dignissimos";
                                value = "dicta";
                            }}),
                        }};
                        image = new ImageSettings() {{
                            backgroundImageUrl = new LocalizedProperty() {{
                                defaultLanguage = new LanguageTag() {{
                                    value = "maiores";
                                }};;
                                localized = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                    add(new LocalizedString() {{
                                        language = "velit";
                                        value = "voluptatibus";
                                    }}),
                                    add(new LocalizedString() {{
                                        language = "voluptas";
                                        value = "asperiores";
                                    }}),
                                    add(new LocalizedString() {{
                                        language = "aperiam";
                                        value = "ea";
                                    }}),
                                }};
                            }};;
                            bannerExternalUrl = "quaerat";
                            bannerImageUrl = "consequuntur";
                            bannerMobileExtraHdImageUrl = "repellendus";
                            bannerMobileHdImageUrl = "officia";
                            bannerMobileImageUrl = "maxime";
                            bannerMobileLowImageUrl = "dignissimos";
                            bannerMobileMediumHdImageUrl = "officia";
                            bannerTabletExtraHdImageUrl = "asperiores";
                            bannerTabletHdImageUrl = "nemo";
                            bannerTabletImageUrl = "quae";
                            bannerTabletLowImageUrl = "quaerat";
                            bannerTvHighImageUrl = "porro";
                            bannerTvImageUrl = "quod";
                            bannerTvLowImageUrl = "labore";
                            bannerTvMediumImageUrl = "ab";
                            largeBrandedBannerImageImapScript = new LocalizedProperty() {{
                                defaultLanguage = new LanguageTag() {{
                                    value = "adipisci";
                                }};;
                                localized = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                    add(new LocalizedString() {{
                                        language = "id";
                                        value = "suscipit";
                                    }}),
                                    add(new LocalizedString() {{
                                        language = "velit";
                                        value = "culpa";
                                    }}),
                                    add(new LocalizedString() {{
                                        language = "est";
                                        value = "recusandae";
                                    }}),
                                }};
                            }};;
                            largeBrandedBannerImageUrl = new LocalizedProperty() {{
                                defaultLanguage = new LanguageTag() {{
                                    value = "totam";
                                }};;
                                localized = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                    add(new LocalizedString() {{
                                        language = "vel";
                                        value = "ducimus";
                                    }}),
                                    add(new LocalizedString() {{
                                        language = "quos";
                                        value = "vel";
                                    }}),
                                    add(new LocalizedString() {{
                                        language = "labore";
                                        value = "possimus";
                                    }}),
                                    add(new LocalizedString() {{
                                        language = "facilis";
                                        value = "cum";
                                    }}),
                                }};
                            }};;
                            smallBrandedBannerImageImapScript = new LocalizedProperty() {{
                                defaultLanguage = new LanguageTag() {{
                                    value = "commodi";
                                }};;
                                localized = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                    add(new LocalizedString() {{
                                        language = "corporis";
                                        value = "reiciendis";
                                    }}),
                                    add(new LocalizedString() {{
                                        language = "assumenda";
                                        value = "nemo";
                                    }}),
                                }};
                            }};;
                            smallBrandedBannerImageUrl = new LocalizedProperty() {{
                                defaultLanguage = new LanguageTag() {{
                                    value = "recusandae";
                                }};;
                                localized = new org.openapis.openapi.models.shared.LocalizedString[]{{
                                    add(new LocalizedString() {{
                                        language = "aperiam";
                                        value = "cum";
                                    }}),
                                    add(new LocalizedString() {{
                                        language = "consectetur";
                                        value = "in";
                                    }}),
                                }};
                            }};;
                            trackingImageUrl = "exercitationem";
                            watchIconImageUrl = "earum";
                        }};;
                        watch = new WatchSettings() {{
                            backgroundColor = "facere";
                            featuredPlaylistId = "numquam";
                            textColor = "doloribus";
                        }};;
                    }};;
                    contentDetails = new ChannelContentDetails() {{
                        relatedPlaylists = new ChannelContentDetailsRelatedPlaylists() {{
                            favorites = "suscipit";
                            likes = "reiciendis";
                            uploads = "quidem";
                            watchHistory = "saepe";
                            watchLater = "necessitatibus";
                        }};;
                    }};;
                    contentOwnerDetails = new ChannelContentOwnerDetails() {{
                        contentOwner = "dolore";
                        timeLinked = OffsetDateTime.parse("2022-01-03T21:58:53.395Z");
                    }};;
                    conversionPings = new ChannelConversionPings() {{
                        pings = new org.openapis.openapi.models.shared.ChannelConversionPing[]{{
                            add(new ChannelConversionPing() {{
                                context = ChannelConversionPingContextEnum.SUBSCRIBE;
                                conversionUrl = "amet";
                            }}),
                        }};
                    }};;
                    etag = "beatae";
                    id = "7fe35b60-eb1e-4a42-a555-ba3c28744ed5";
                    kind = "adipisci";
                    localizations = new java.util.HashMap<String, org.openapis.openapi.models.shared.ChannelLocalization>() {{
                        put("blanditiis", new ChannelLocalization() {{
                            description = "quas";
                            title = "Dr.";
                        }});
                        put("nesciunt", new ChannelLocalization() {{
                            description = "culpa";
                            title = "Ms.";
                        }});
                        put("pariatur", new ChannelLocalization() {{
                            description = "totam";
                            title = "Dr.";
                        }});
                    }};
                    snippet = new ChannelSnippet() {{
                        country = "Guam";
                        customUrl = "nobis";
                        defaultLanguage = "sit";
                        description = "rerum";
                        localized = new ChannelLocalization() {{
                            description = "sed";
                            title = "Dr.";
                        }};;
                        publishedAt = OffsetDateTime.parse("2022-01-03T01:02:56.740Z");
                        thumbnails = new ThumbnailDetails() {{
                            high = new Thumbnail() {{
                                height = 707918L;
                                url = "voluptate";
                                width = 709072L;
                            }};;
                            maxres = new Thumbnail() {{
                                height = 70869L;
                                url = "iste";
                                width = 292794L;
                            }};;
                            medium = new Thumbnail() {{
                                height = 671907L;
                                url = "sed";
                                width = 447516L;
                            }};;
                            standard = new Thumbnail() {{
                                height = 417486L;
                                url = "quidem";
                                width = 131289L;
                            }};;
                        }};;
                        title = "Mrs.";
                    }};;
                    statistics = new ChannelStatistics() {{
                        commentCount = "unde";
                        hiddenSubscriberCount = false;
                        subscriberCount = "architecto";
                        videoCount = "suscipit";
                        viewCount = "sapiente";
                    }};;
                    status = new ChannelStatus() {{
                        isLinked = false;
                        longUploadsStatus = ChannelStatusLongUploadsStatusEnum.DISALLOWED;
                        madeForKids = false;
                        privacyStatus = ChannelStatusPrivacyStatusEnum.PUBLIC_;
                        selfDeclaredMadeForKids = false;
                    }};;
                    topicDetails = new ChannelTopicDetails() {{
                        topicCategories = new String[]{{
                            add("perferendis"),
                            add("corrupti"),
                            add("maiores"),
                            add("incidunt"),
                        }};
                        topicIds = new String[]{{
                            add("provident"),
                        }};
                    }};;
                }};;
                accessToken = "eius";
                alt = AltEnum.PROTO;
                callback = "ipsum";
                fields = "ea";
                key = "occaecati";
                oauthToken = "quos";
                onBehalfOfContentOwner = "voluptatibus";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "tempora";
                uploadProtocol = "voluptate";
            }};            

            YoutubeChannelsUpdateResponse res = sdk.channels.youtubeChannelsUpdate(req, new YoutubeChannelsUpdateSecurity() {{
                option1 = new YoutubeChannelsUpdateSecurityOption1("reiciendis", "ex") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.channel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
