import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";
import { ServiceCredentialType } from "./servicecredentialtype";
/**
 * ServiceCredentialTypes collection
 */
export declare class ServiceCredentialTypesCollection extends SpeakeasyBase {
    data?: ServiceCredentialType[];
    links?: CollectionLinks;
    meta?: CollectionMetadata;
}
