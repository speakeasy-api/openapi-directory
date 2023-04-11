import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetsSetCardLocalIdRequest extends SpeakeasyBase {
    cardLocalId: string;
    set: string;
}
export declare class GetSetsSetCardLocalIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    card?: shared.Card;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
