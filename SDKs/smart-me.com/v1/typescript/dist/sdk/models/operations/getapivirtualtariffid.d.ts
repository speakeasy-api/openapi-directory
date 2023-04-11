import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiVirtualTariffIdRequest extends SpeakeasyBase {
    /**
     * The ID of the Folder
     */
    id: string;
}
export declare class GetApiVirtualTariffIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    virtualTariffsOfFolder?: shared.VirtualTariffsOfFolder;
}
