import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VirtualTariffsForPropertyGetRequest extends SpeakeasyBase {
    id: string;
}
export declare class VirtualTariffsForPropertyGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    virtualTariffsOfFolders?: shared.VirtualTariffsOfFolder[];
}
