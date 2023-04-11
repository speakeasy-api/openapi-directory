import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentStyle } from "./documentstyle";
/**
 * Updates the DocumentStyle.
 */
export declare class UpdateDocumentStyleRequest extends SpeakeasyBase {
    /**
     * The style of the document.
     */
    documentStyle?: DocumentStyle;
    /**
     * The fields that should be updated. At least one field must be specified. The root `document_style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the background, set `fields` to `"background"`.
     */
    fields?: string;
}
