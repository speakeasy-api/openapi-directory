import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListInstrumentsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class ListInstrumentsRequest extends SpeakeasyBase {
    security: ListInstrumentsSecurity;
}
export declare class ListInstrumentsResponse extends SpeakeasyBase {
    contentType: string;
    instrumentList?: shared.InstrumentList;
    statusCode: number;
}
