import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicysimulatorV1AccessTuple } from "./googlecloudpolicysimulatorv1accesstuple";
import { GoogleCloudPolicysimulatorV1ReplayDiff } from "./googlecloudpolicysimulatorv1replaydiff";
import { GoogleRpcStatus } from "./googlerpcstatus";
import { GoogleTypeDate } from "./googletypedate";
/**
 * The result of replaying a single access tuple against a simulated state.
 */
export declare class GoogleCloudPolicysimulatorV1ReplayResult extends SpeakeasyBase {
    /**
     * Information about the principal, resource, and permission to check.
     */
    accessTuple?: GoogleCloudPolicysimulatorV1AccessTuple;
    /**
     * The difference between the results of evaluating an access tuple under the current (baseline) policies and under the proposed (simulated) policies. This difference explains how a principal's access could change if the proposed policies were applied.
     */
    diff?: GoogleCloudPolicysimulatorV1ReplayDiff;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: GoogleRpcStatus;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    lastSeenDate?: GoogleTypeDate;
    /**
     * The resource name of the `ReplayResult`, in the following format: `{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}/results/{replay-result-id}`, where `{resource-id}` is the ID of the project, folder, or organization that owns the Replay. Example: `projects/my-example-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36/results/1234`
     */
    name?: string;
    /**
     * The Replay that the access tuple was included in.
     */
    parent?: string;
}
