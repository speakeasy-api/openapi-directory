import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ConvertRequestBody extends SpeakeasyBase {
    /**
     * Some use مائة others use مئة , both works in Arabic. If left empty the default is مائة
     */
    hundredsForm?: string;
    /**
     * Put the number here. Decimal is supported by most units.
     */
    theNumber?: string;
    /**
     * The counted subject, be it a currency like درهم إماراتي  or a size unit like متر مربع
     *
     * @remarks
     * If the unit does not appear in the text result, it may not be supported. Please contact us to add it.
     */
    unit?: string;
}
export declare class ConvertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
