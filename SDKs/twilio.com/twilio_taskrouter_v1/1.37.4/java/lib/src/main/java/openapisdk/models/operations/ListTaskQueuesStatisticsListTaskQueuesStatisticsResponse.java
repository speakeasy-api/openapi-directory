package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListTaskQueuesStatisticsListTaskQueuesStatisticsResponseMeta meta;
    public ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse withMeta(ListTaskQueuesStatisticsListTaskQueuesStatisticsResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task_queues_statistics")
    public openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics[] taskQueuesStatistics;
    public ListTaskQueuesStatisticsListTaskQueuesStatisticsResponse withTaskQueuesStatistics(openapisdk.models.shared.TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics[] taskQueuesStatistics) {
        this.taskQueuesStatistics = taskQueuesStatistics;
        return this;
    }
}