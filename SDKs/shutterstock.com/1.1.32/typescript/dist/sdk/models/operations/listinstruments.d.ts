import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListInstrumentsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class ListInstrumentsRequest extends SpeakeasyBase {
    /**
     * Which language the instruments will be returned in
     */
    language?: string;
}
export declare class ListInstrumentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    instrumentList?: shared.InstrumentList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
