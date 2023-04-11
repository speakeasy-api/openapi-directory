import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBelegeBelegUuidRequest extends SpeakeasyBase {
    /**
     * The `_uuid` of the `Beleg` to fetch.
     */
    belegUuid: string;
}
export declare class GetBelegeBelegUuidResponse extends SpeakeasyBase {
    /**
     * The requested `Beleg` resource.
     */
    beleg?: shared.Beleg;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
