import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSetupV1LocationsIdGoogleServiceAccountRequest extends SpeakeasyBase {
    /**
     * id of business location, defaults to primary business location
     */
    id: string;
}
export declare class DeleteSetupV1LocationsIdGoogleServiceAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
