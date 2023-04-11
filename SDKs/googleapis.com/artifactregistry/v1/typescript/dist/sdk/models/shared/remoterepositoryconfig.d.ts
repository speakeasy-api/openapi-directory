import { SpeakeasyBase } from "../../../internal/utils";
import { DockerRepository } from "./dockerrepository";
import { MavenRepository } from "./mavenrepository";
import { NpmRepository } from "./npmrepository";
import { PythonRepository } from "./pythonrepository";
/**
 * Remote repository configuration.
 */
export declare class RemoteRepositoryConfig extends SpeakeasyBase {
    /**
     * The description of the remote source.
     */
    description?: string;
    /**
     * Configuration for a Docker remote repository.
     */
    dockerRepository?: DockerRepository;
    /**
     * Configuration for a Maven remote repository.
     */
    mavenRepository?: MavenRepository;
    /**
     * Configuration for a Npm remote repository.
     */
    npmRepository?: NpmRepository;
    /**
     * Configuration for a Python remote repository.
     */
    pythonRepository?: PythonRepository;
}
