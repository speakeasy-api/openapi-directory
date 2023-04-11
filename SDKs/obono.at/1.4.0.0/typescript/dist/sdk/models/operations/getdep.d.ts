import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDEPRequest extends SpeakeasyBase {
    /**
     * The `_uuid` of the `Registrierkasse` to retrieve the DEP file.
     */
    registrierkasseUuid: string;
}
export declare class GetDEPResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
