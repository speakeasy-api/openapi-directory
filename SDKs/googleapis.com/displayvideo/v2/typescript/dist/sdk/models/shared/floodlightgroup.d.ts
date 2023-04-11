import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveViewVideoViewabilityMetricConfig } from "./activeviewvideoviewabilitymetricconfig";
import { LookbackWindow } from "./lookbackwindow";
/**
 * Required. The web tag type enabled for the Floodlight group.
 */
export declare enum FloodlightGroupWebTagTypeEnum {
    WebTagTypeUnspecified = "WEB_TAG_TYPE_UNSPECIFIED",
    WebTagTypeNone = "WEB_TAG_TYPE_NONE",
    WebTagTypeImage = "WEB_TAG_TYPE_IMAGE",
    WebTagTypeDynamic = "WEB_TAG_TYPE_DYNAMIC"
}
/**
 * A single Floodlight group.
 */
export declare class FloodlightGroup extends SpeakeasyBase {
    /**
     * Configuration for custom Active View video viewability metrics.
     */
    activeViewConfig?: ActiveViewVideoViewabilityMetricConfig;
    /**
     * User-defined custom variables owned by the Floodlight group. Use custom Floodlight variables to create reporting data that is tailored to your unique business needs. Custom Floodlight variables use the keys `U1=`, `U2=`, and so on, and can take any values that you choose to pass to them. You can use them to track virtually any type of data that you collect about your customers, such as the genre of movie that a customer purchases, the country to which the item is shipped, and so on. Custom Floodlight variables may not be used to pass any data that could be used or recognized as personally identifiable information (PII). Example: `custom_variables { fields { "U1": value { number_value: 123.4 }, "U2": value { string_value: "MyVariable2" }, "U3": value { string_value: "MyVariable3" } } }` Acceptable values for keys are "U1" through "U100", inclusive. String values must be less than 64 characters long, and cannot contain the following characters: `"<>`.
     */
    customVariables?: Record<string, any>;
    /**
     * Required. The display name of the Floodlight group.
     */
    displayName?: string;
    /**
     * Output only. The unique ID of the Floodlight group. Assigned by the system.
     */
    floodlightGroupId?: string;
    /**
     * Specifies how many days into the past to look when determining whether to record a conversion.
     */
    lookbackWindow?: LookbackWindow;
    /**
     * Output only. The resource name of the Floodlight group.
     */
    name?: string;
    /**
     * Required. The web tag type enabled for the Floodlight group.
     */
    webTagType?: FloodlightGroupWebTagTypeEnum;
}
