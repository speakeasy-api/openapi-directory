import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * The type of header to create.
 */
export declare enum CreateHeaderRequestTypeEnum {
    HeaderFooterTypeUnspecified = "HEADER_FOOTER_TYPE_UNSPECIFIED",
    Default = "DEFAULT"
}
/**
 * Creates a Header. The new header is applied to the SectionStyle at the location of the SectionBreak if specified, otherwise it is applied to the DocumentStyle. If a header of the specified type already exists, a 400 bad request error is returned.
 */
export declare class CreateHeaderRequest extends SpeakeasyBase {
    /**
     * A particular location in the document.
     */
    sectionBreakLocation?: Location;
    /**
     * The type of header to create.
     */
    type?: CreateHeaderRequestTypeEnum;
}
