import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VirtualTariffConsumptionGetRequest extends SpeakeasyBase {
    /**
     * The end date (UTC)
     */
    endDate: Date;
    /**
     * The ID of the Folder
     */
    folderId: string;
    /**
     * The start date (UTC)
     */
    startDate: Date;
}
export declare class VirtualTariffConsumptionGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    virtualTariffConsumptionData?: shared.VirtualTariffConsumptionData[];
}
