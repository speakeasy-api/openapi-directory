import { SpeakeasyBase } from "../../../internal/utils";
export declare class GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest extends SpeakeasyBase {
    /**
     * The raw icon bytes user-supplied to be uploaded to the product. The format
     *
     * @remarks
     * of the icon can only be PNG or JPEG. The minimum allowed dimensions are
     * 130x130 pixels and the maximum dimensions are 10000x10000 pixels.
     * Required.
     */
    icon?: string;
}
