import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional. Specifies the type of viewer that is used when opening the URL. Defaults to opening via web browser.
 */
export declare enum GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum {
    UrlTypeHintUnspecified = "URL_TYPE_HINT_UNSPECIFIED",
    AmpAction = "AMP_ACTION",
    AmpContent = "AMP_CONTENT"
}
/**
 * Actions on Google action to open a given url.
 */
export declare class GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction extends SpeakeasyBase {
    /**
     * Required. URL
     */
    url?: string;
    /**
     * Optional. Specifies the type of viewer that is used when opening the URL. Defaults to opening via web browser.
     */
    urlTypeHint?: GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlActionUrlTypeHintEnum;
}
