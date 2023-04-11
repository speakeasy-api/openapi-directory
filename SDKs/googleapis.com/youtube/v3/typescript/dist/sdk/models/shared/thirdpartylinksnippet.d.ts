import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelToStoreLinkDetails } from "./channeltostorelinkdetails";
/**
 * Type of the link named after the entities that are being linked.
 */
export declare enum ThirdPartyLinkSnippetTypeEnum {
    LinkUnspecified = "linkUnspecified",
    ChannelToStoreLink = "channelToStoreLink"
}
/**
 * Basic information about a third party account link, including its type and type-specific information.
 */
export declare class ThirdPartyLinkSnippet extends SpeakeasyBase {
    /**
     * Information specific to a store on a merchandising platform linked to a YouTube channel.
     */
    channelToStoreLink?: ChannelToStoreLinkDetails;
    /**
     * Type of the link named after the entities that are being linked.
     */
    type?: ThirdPartyLinkSnippetTypeEnum;
}
