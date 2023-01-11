package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RoutesOneOrMoreRoutesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devid")
    public String devid;
    public RoutesOneOrMoreRoutesQueryParams withDevid(String devid) {
        this.devid = devid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=route_name")
    public String routeName;
    public RoutesOneOrMoreRoutesQueryParams withRouteName(String routeName) {
        this.routeName = routeName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=route_types")
    public Integer[] routeTypes;
    public RoutesOneOrMoreRoutesQueryParams withRouteTypes(Integer[] routeTypes) {
        this.routeTypes = routeTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=signature")
    public String signature;
    public RoutesOneOrMoreRoutesQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public RoutesOneOrMoreRoutesQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}