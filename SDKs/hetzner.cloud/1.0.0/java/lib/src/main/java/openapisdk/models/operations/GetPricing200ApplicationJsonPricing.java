package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPricing200ApplicationJsonPricing {
    @JsonProperty("currency")
    public String currency;
    public GetPricing200ApplicationJsonPricing withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("floating_ip")
    public GetPricing200ApplicationJsonPricingFloatingIp floatingIp;
    public GetPricing200ApplicationJsonPricing withFloatingIp(GetPricing200ApplicationJsonPricingFloatingIp floatingIp) {
        this.floatingIp = floatingIp;
        return this;
    }
    @JsonProperty("floating_ips")
    public GetPricing200ApplicationJsonPricingFloatingIps[] floatingIps;
    public GetPricing200ApplicationJsonPricing withFloatingIps(GetPricing200ApplicationJsonPricingFloatingIps[] floatingIps) {
        this.floatingIps = floatingIps;
        return this;
    }
    @JsonProperty("image")
    public GetPricing200ApplicationJsonPricingImage image;
    public GetPricing200ApplicationJsonPricing withImage(GetPricing200ApplicationJsonPricingImage image) {
        this.image = image;
        return this;
    }
    @JsonProperty("load_balancer_types")
    public GetPricing200ApplicationJsonPricingLoadBalancerTypes[] loadBalancerTypes;
    public GetPricing200ApplicationJsonPricing withLoadBalancerTypes(GetPricing200ApplicationJsonPricingLoadBalancerTypes[] loadBalancerTypes) {
        this.loadBalancerTypes = loadBalancerTypes;
        return this;
    }
    @JsonProperty("server_backup")
    public GetPricing200ApplicationJsonPricingServerBackup serverBackup;
    public GetPricing200ApplicationJsonPricing withServerBackup(GetPricing200ApplicationJsonPricingServerBackup serverBackup) {
        this.serverBackup = serverBackup;
        return this;
    }
    @JsonProperty("server_types")
    public GetPricing200ApplicationJsonPricingServerTypes[] serverTypes;
    public GetPricing200ApplicationJsonPricing withServerTypes(GetPricing200ApplicationJsonPricingServerTypes[] serverTypes) {
        this.serverTypes = serverTypes;
        return this;
    }
    @JsonProperty("traffic")
    public GetPricing200ApplicationJsonPricingTraffic traffic;
    public GetPricing200ApplicationJsonPricing withTraffic(GetPricing200ApplicationJsonPricingTraffic traffic) {
        this.traffic = traffic;
        return this;
    }
    @JsonProperty("vat_rate")
    public String vatRate;
    public GetPricing200ApplicationJsonPricing withVatRate(String vatRate) {
        this.vatRate = vatRate;
        return this;
    }
    @JsonProperty("volume")
    public GetPricing200ApplicationJsonPricingVolume volume;
    public GetPricing200ApplicationJsonPricing withVolume(GetPricing200ApplicationJsonPricingVolume volume) {
        this.volume = volume;
        return this;
    }
}