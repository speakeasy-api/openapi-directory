import { SpeakeasyBase } from "../../../internal/utils";
import { CreateFooterResponse } from "./createfooterresponse";
import { CreateFootnoteResponse } from "./createfootnoteresponse";
import { CreateHeaderResponse } from "./createheaderresponse";
import { CreateNamedRangeResponse } from "./createnamedrangeresponse";
import { InsertInlineImageResponse } from "./insertinlineimageresponse";
import { InsertInlineSheetsChartResponse } from "./insertinlinesheetschartresponse";
import { ReplaceAllTextResponse } from "./replacealltextresponse";
/**
 * A single response from an update.
 */
export declare class Response extends SpeakeasyBase {
    /**
     * The result of creating a footer.
     */
    createFooter?: CreateFooterResponse;
    /**
     * The result of creating a footnote.
     */
    createFootnote?: CreateFootnoteResponse;
    /**
     * The result of creating a header.
     */
    createHeader?: CreateHeaderResponse;
    /**
     * The result of creating a named range.
     */
    createNamedRange?: CreateNamedRangeResponse;
    /**
     * The result of inserting an inline image.
     */
    insertInlineImage?: InsertInlineImageResponse;
    /**
     * The result of inserting an embedded Google Sheets chart.
     */
    insertInlineSheetsChart?: InsertInlineSheetsChartResponse;
    /**
     * The result of replacing text.
     */
    replaceAllText?: ReplaceAllTextResponse;
}
