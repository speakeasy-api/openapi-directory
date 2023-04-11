import { SpeakeasyBase } from "../../../internal/utils";
import { Meta } from "./meta";
import { SyndicateMarshaller } from "./syndicatemarshaller";
/**
 * Renders the list of MediaItems associated with the Tag identified by the 'id'.
 */
export declare class SyndicateMarshallerWrapped extends SpeakeasyBase {
    callback?: string;
    meta?: Meta;
    results?: SyndicateMarshaller[];
}
