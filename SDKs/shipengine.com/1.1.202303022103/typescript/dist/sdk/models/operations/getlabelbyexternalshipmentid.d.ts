import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLabelByExternalShipmentIdRequest extends SpeakeasyBase {
    externalShipmentId: string;
    /**
     * There are two different ways to [download a label](https://www.shipengine.com/docs/labels/downloading/):
     *
     * @remarks
     *
     * |Label Download Type | Description
     * |--------------------|------------------------------
     * |`url`               |You will receive a URL, which you can use to download the label in a separate request. The URL will remain valid for 90 days.<br><br>This is the default if `label_download_type` is unspecified.
     * |`inline`            |You will receive the Base64-encoded label as part of the response. No need for a second request to download the label.
     *
     */
    labelDownloadType?: shared.LabelDownloadTypeEnum;
}
export declare class GetLabelByExternalShipmentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
    /**
     * The requested object creation was a success.
     */
    getLabelByExternalShipmentIdResponseBody?: shared.GetLabelByExternalShipmentIdResponseBodyOutput;
}
