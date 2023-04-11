import { SpeakeasyBase } from "../../../internal/utils";
import { Deployment } from "./deployment";
/**
 * Type of profile. For offline mode, this must be specified when creating the profile. For online mode it is assigned and returned by the server.
 */
export declare enum ProfileProfileTypeEnum {
    ProfileTypeUnspecified = "PROFILE_TYPE_UNSPECIFIED",
    Cpu = "CPU",
    Wall = "WALL",
    Heap = "HEAP",
    Threads = "THREADS",
    Contention = "CONTENTION",
    PeakHeap = "PEAK_HEAP",
    HeapAlloc = "HEAP_ALLOC"
}
/**
 * Profile resource.
 */
export declare class ProfileInput extends SpeakeasyBase {
    /**
     * Deployment contains the deployment identification information.
     */
    deployment?: Deployment;
    /**
     * Duration of the profiling session. Input (for the offline mode) or output (for the online mode). The field represents requested profiling duration. It may slightly differ from the effective profiling duration, which is recorded in the profile data, in case the profiling can't be stopped immediately (e.g. in case stopping the profiling is handled asynchronously).
     */
    duration?: string;
    /**
     * Input only. Labels associated to this specific profile. These labels will get merged with the deployment labels for the final data set. See documentation on deployment labels for validation rules and limits.
     */
    labels?: Record<string, string>;
    /**
     * Input only. Profile bytes, as a gzip compressed serialized proto, the format is https://github.com/google/pprof/blob/master/proto/profile.proto.
     */
    profileBytes?: string;
    /**
     * Type of profile. For offline mode, this must be specified when creating the profile. For online mode it is assigned and returned by the server.
     */
    profileType?: ProfileProfileTypeEnum;
}
/**
 * Profile resource.
 */
export declare class Profile extends SpeakeasyBase {
    /**
     * Deployment contains the deployment identification information.
     */
    deployment?: Deployment;
    /**
     * Duration of the profiling session. Input (for the offline mode) or output (for the online mode). The field represents requested profiling duration. It may slightly differ from the effective profiling duration, which is recorded in the profile data, in case the profiling can't be stopped immediately (e.g. in case stopping the profiling is handled asynchronously).
     */
    duration?: string;
    /**
     * Input only. Labels associated to this specific profile. These labels will get merged with the deployment labels for the final data set. See documentation on deployment labels for validation rules and limits.
     */
    labels?: Record<string, string>;
    /**
     * Output only. Opaque, server-assigned, unique ID for this profile.
     */
    name?: string;
    /**
     * Input only. Profile bytes, as a gzip compressed serialized proto, the format is https://github.com/google/pprof/blob/master/proto/profile.proto.
     */
    profileBytes?: string;
    /**
     * Type of profile. For offline mode, this must be specified when creating the profile. For online mode it is assigned and returned by the server.
     */
    profileType?: ProfileProfileTypeEnum;
}
