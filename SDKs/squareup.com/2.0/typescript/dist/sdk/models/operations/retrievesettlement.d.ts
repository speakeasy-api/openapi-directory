import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveSettlementSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveSettlementRequest extends SpeakeasyBase {
    /**
     * The ID of the settlements's associated location.
     */
    locationId: string;
    /**
     * The settlement's Square-issued ID. You obtain this value from Settlement objects returned by the List Settlements endpoint.
     */
    settlementId: string;
}
export declare class RetrieveSettlementResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    v1Settlement?: shared.V1Settlement;
}
