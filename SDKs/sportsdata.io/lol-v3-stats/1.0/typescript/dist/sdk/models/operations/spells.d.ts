import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum SpellsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class SpellsRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: SpellsFormatEnum;
}
export declare class SpellsResponse extends SpeakeasyBase {
    contentType: string;
    spells?: shared.Spell[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
