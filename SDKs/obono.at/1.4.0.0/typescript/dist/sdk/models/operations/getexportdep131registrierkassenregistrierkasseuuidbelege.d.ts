import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeRequest extends SpeakeasyBase {
    /**
     * Only return results that were saved after the specified date-time string (i.e., anything that `Date.parse()` can parse).
     */
    after?: string;
    /**
     * Only return results that were saved before the specified date-time string (i.e., anything that `Date.parse()` can parse).
     */
    before?: string;
    /**
     * The `_uuid` of the `Registrierkasse` to export.
     */
    registrierkasseUuid: string;
}
export declare class GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
