import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings for Binary Authorization feature.
 */
export declare class GoogleCloudRunV2BinaryAuthorization extends SpeakeasyBase {
    /**
     * If present, indicates to use Breakglass using this justification. If use_default is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass
     */
    breakglassJustification?: string;
    /**
     * If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.
     */
    useDefault?: boolean;
}
