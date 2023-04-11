import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the feature that enabled for fulfillment.
 */
export declare enum GoogleCloudDialogflowV2beta1FulfillmentFeatureTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Smalltalk = "SMALLTALK"
}
/**
 * Whether fulfillment is enabled for the specific feature.
 */
export declare class GoogleCloudDialogflowV2beta1FulfillmentFeature extends SpeakeasyBase {
    /**
     * The type of the feature that enabled for fulfillment.
     */
    type?: GoogleCloudDialogflowV2beta1FulfillmentFeatureTypeEnum;
}
