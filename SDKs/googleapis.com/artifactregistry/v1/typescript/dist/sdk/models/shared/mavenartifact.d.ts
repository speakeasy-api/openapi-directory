import { SpeakeasyBase } from "../../../internal/utils";
/**
 * MavenArtifact represents a maven artifact.
 */
export declare class MavenArtifact extends SpeakeasyBase {
    /**
     * Artifact ID for the artifact.
     */
    artifactId?: string;
    /**
     * Output only. Time the artifact was created.
     */
    createTime?: string;
    /**
     * Group ID for the artifact. Example: com.google.guava
     */
    groupId?: string;
    /**
     * Required. registry_location, project_id, repository_name and maven_artifact forms a unique artifact For example, "projects/test-project/locations/us-west4/repositories/test-repo/mavenArtifacts/ com.google.guava:guava:31.0-jre", where "us-west4" is the registry_location, "test-project" is the project_id, "test-repo" is the repository_name and "com.google.guava:guava:31.0-jre" is the maven artifact.
     */
    name?: string;
    /**
     * Required. URL to access the pom file of the artifact. Example: us-west4-maven.pkg.dev/test-project/test-repo/com/google/guava/guava/31.0/guava-31.0.pom
     */
    pomUri?: string;
    /**
     * Output only. Time the artifact was updated.
     */
    updateTime?: string;
    /**
     * Version of this artifact.
     */
    version?: string;
}
