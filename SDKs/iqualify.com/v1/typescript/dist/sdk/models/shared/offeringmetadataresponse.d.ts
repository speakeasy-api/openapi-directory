import { SpeakeasyBase } from "../../../internal/utils";
import { OfferingMetadata } from "./offeringmetadata";
/**
 * offering created
 */
export declare class OfferingMetadataResponse extends SpeakeasyBase {
    contentId?: string;
    coverImageUrl?: string;
    currency?: string;
    description?: string;
    earlyCloseOffDate?: Date;
    end?: Date;
    enrollmentLimit?: number;
    hasEarlyCloseOff?: boolean;
    id?: string;
    identifier?: string;
    isReadonly?: boolean;
    metadata?: OfferingMetadata;
    name?: string;
    /**
     * content can contain html
     */
    overview?: string;
    price?: number;
    start?: Date;
    tasksEnabled?: boolean;
    trailerVideoUrl?: string;
    useRelativeDates?: boolean;
}
