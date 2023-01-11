package openapisdk.models.operations;



public class SqlInstancesStartReplicaRequest {
    public SqlInstancesStartReplicaPathParams pathParams;
    public SqlInstancesStartReplicaRequest withPathParams(SqlInstancesStartReplicaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlInstancesStartReplicaQueryParams queryParams;
    public SqlInstancesStartReplicaRequest withQueryParams(SqlInstancesStartReplicaQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SqlInstancesStartReplicaSecurity security;
    public SqlInstancesStartReplicaRequest withSecurity(SqlInstancesStartReplicaSecurity security) {
        this.security = security;
        return this;
    }
}