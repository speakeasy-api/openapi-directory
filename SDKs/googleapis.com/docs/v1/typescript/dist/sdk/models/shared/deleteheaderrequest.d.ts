import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Deletes a Header from the document.
 */
export declare class DeleteHeaderRequest extends SpeakeasyBase {
    /**
     * The id of the header to delete. If this header is defined on DocumentStyle, the reference to this header is removed, resulting in no header of that type for the first section of the document. If this header is defined on a SectionStyle, the reference to this header is removed and the header of that type is now continued from the previous section.
     */
    headerId?: string;
}
