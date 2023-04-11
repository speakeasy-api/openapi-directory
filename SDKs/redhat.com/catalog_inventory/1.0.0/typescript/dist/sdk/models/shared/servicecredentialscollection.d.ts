import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";
import { ServiceCredential } from "./servicecredential";
/**
 * ServiceCredentials collection
 */
export declare class ServiceCredentialsCollection extends SpeakeasyBase {
    data?: ServiceCredential[];
    links?: CollectionLinks;
    meta?: CollectionMetadata;
}
