import { SpeakeasyBase } from "../../../internal/utils";
import { SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfo } from "./setcommoninstancemetadataoperationmetadataperlocationoperationinfo";
/**
 * Encapsulates partial completion metadata for SetCommonInstanceMetadata. Will be propagated on Operation.metadata as per go/partial-completion-api-clean. See go/gce-aips/2822 for API council results.
 */
export declare class SetCommonInstanceMetadataOperationMetadata extends SpeakeasyBase {
    clientOperationId?: string;
    perLocationOperations?: Record<string, SetCommonInstanceMetadataOperationMetadataPerLocationOperationInfo>;
}
