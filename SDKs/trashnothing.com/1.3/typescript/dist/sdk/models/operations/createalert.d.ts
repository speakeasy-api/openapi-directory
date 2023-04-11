import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAlertRequestBody extends SpeakeasyBase {
    /**
     * When a post matches this search query, an email alert will be sent.  Must have a length >= 2 and < 255 characters.
     */
    search: string;
    /**
     * A comma separated list of the post types that the alert should match against. The available post types are: offer, wanted
     *
     * @remarks
     *
     */
    types: string;
}
export declare class CreateAlertResponse extends SpeakeasyBase {
    /**
     * The new alert.
     */
    alert?: shared.Alert;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
