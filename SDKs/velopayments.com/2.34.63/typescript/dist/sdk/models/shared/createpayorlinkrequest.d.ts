import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreatePayorLinkRequestLinkTypeEnum {
    ParentOf = "PARENT_OF"
}
/**
 * Request to create a payor link
 */
export declare class CreatePayorLinkRequest extends SpeakeasyBase {
    fromPayorId: string;
    linkType: CreatePayorLinkRequestLinkTypeEnum;
    toPayorId: string;
}
