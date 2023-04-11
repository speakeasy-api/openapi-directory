import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceCode } from "./devicecode";
import { ErrorT } from "./error";
/**
 * Success
 */
export declare class ListDeviceCodesResponse extends SpeakeasyBase {
    /**
     * A pagination cursor to retrieve the next set of results for your
     *
     * @remarks
     * original query to the endpoint. This value is present only if the request
     * succeeded and additional results are available.
     *
     * See [Paginating results](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
     */
    cursor?: string;
    /**
     * The queried DeviceCode.
     */
    deviceCodes?: DeviceCode[];
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
