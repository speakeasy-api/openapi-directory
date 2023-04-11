import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationModel } from "./destinationmodel";
import { MetaTagModel } from "./metatagmodel";
import { SnippetModel } from "./snippetmodel";
/**
 * Alias model or **null**
 */
export declare class AliasModel extends SpeakeasyBase {
    createdAt?: number;
    destinations?: DestinationModel[];
    domainName?: string;
    metatags?: MetaTagModel[];
    name: string;
    snippets?: SnippetModel[];
    updatedAt?: number;
}
