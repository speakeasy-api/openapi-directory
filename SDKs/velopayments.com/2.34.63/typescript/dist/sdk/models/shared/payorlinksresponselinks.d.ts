import { SpeakeasyBase } from "../../../internal/utils";
export declare class PayorLinksResponseLinks extends SpeakeasyBase {
    fromPayorId: string;
    linkId: string;
    /**
     * The type of the link. One of the following values: PARENT_OF
     */
    linkType: string;
    toPayorId: string;
}
