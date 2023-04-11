import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Deletes a Footer from the document.
 */
export declare class DeleteFooterRequest extends SpeakeasyBase {
    /**
     * The id of the footer to delete. If this footer is defined on DocumentStyle, the reference to this footer is removed, resulting in no footer of that type for the first section of the document. If this footer is defined on a SectionStyle, the reference to this footer is removed and the footer of that type is now continued from the previous section.
     */
    footerId?: string;
}
