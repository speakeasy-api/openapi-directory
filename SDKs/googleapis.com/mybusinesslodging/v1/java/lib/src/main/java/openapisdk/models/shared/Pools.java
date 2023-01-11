package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Pools
 * Swimming pool or recreational water facilities available at the hotel.
**/
public class Pools {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adultPool")
    public Boolean adultPool;
    public Pools withAdultPool(Boolean adultPool) {
        this.adultPool = adultPool;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adultPoolException")
    public PoolsAdultPoolExceptionEnum adultPoolException;
    public Pools withAdultPoolException(PoolsAdultPoolExceptionEnum adultPoolException) {
        this.adultPoolException = adultPoolException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hotTub")
    public Boolean hotTub;
    public Pools withHotTub(Boolean hotTub) {
        this.hotTub = hotTub;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hotTubException")
    public PoolsHotTubExceptionEnum hotTubException;
    public Pools withHotTubException(PoolsHotTubExceptionEnum hotTubException) {
        this.hotTubException = hotTubException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indoorPool")
    public Boolean indoorPool;
    public Pools withIndoorPool(Boolean indoorPool) {
        this.indoorPool = indoorPool;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indoorPoolException")
    public PoolsIndoorPoolExceptionEnum indoorPoolException;
    public Pools withIndoorPoolException(PoolsIndoorPoolExceptionEnum indoorPoolException) {
        this.indoorPoolException = indoorPoolException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indoorPoolsCount")
    public Integer indoorPoolsCount;
    public Pools withIndoorPoolsCount(Integer indoorPoolsCount) {
        this.indoorPoolsCount = indoorPoolsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indoorPoolsCountException")
    public PoolsIndoorPoolsCountExceptionEnum indoorPoolsCountException;
    public Pools withIndoorPoolsCountException(PoolsIndoorPoolsCountExceptionEnum indoorPoolsCountException) {
        this.indoorPoolsCountException = indoorPoolsCountException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lazyRiver")
    public Boolean lazyRiver;
    public Pools withLazyRiver(Boolean lazyRiver) {
        this.lazyRiver = lazyRiver;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lazyRiverException")
    public PoolsLazyRiverExceptionEnum lazyRiverException;
    public Pools withLazyRiverException(PoolsLazyRiverExceptionEnum lazyRiverException) {
        this.lazyRiverException = lazyRiverException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifeguard")
    public Boolean lifeguard;
    public Pools withLifeguard(Boolean lifeguard) {
        this.lifeguard = lifeguard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifeguardException")
    public PoolsLifeguardExceptionEnum lifeguardException;
    public Pools withLifeguardException(PoolsLifeguardExceptionEnum lifeguardException) {
        this.lifeguardException = lifeguardException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outdoorPool")
    public Boolean outdoorPool;
    public Pools withOutdoorPool(Boolean outdoorPool) {
        this.outdoorPool = outdoorPool;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outdoorPoolException")
    public PoolsOutdoorPoolExceptionEnum outdoorPoolException;
    public Pools withOutdoorPoolException(PoolsOutdoorPoolExceptionEnum outdoorPoolException) {
        this.outdoorPoolException = outdoorPoolException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outdoorPoolsCount")
    public Integer outdoorPoolsCount;
    public Pools withOutdoorPoolsCount(Integer outdoorPoolsCount) {
        this.outdoorPoolsCount = outdoorPoolsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outdoorPoolsCountException")
    public PoolsOutdoorPoolsCountExceptionEnum outdoorPoolsCountException;
    public Pools withOutdoorPoolsCountException(PoolsOutdoorPoolsCountExceptionEnum outdoorPoolsCountException) {
        this.outdoorPoolsCountException = outdoorPoolsCountException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pool")
    public Boolean pool;
    public Pools withPool(Boolean pool) {
        this.pool = pool;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("poolException")
    public PoolsPoolExceptionEnum poolException;
    public Pools withPoolException(PoolsPoolExceptionEnum poolException) {
        this.poolException = poolException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("poolsCount")
    public Integer poolsCount;
    public Pools withPoolsCount(Integer poolsCount) {
        this.poolsCount = poolsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("poolsCountException")
    public PoolsPoolsCountExceptionEnum poolsCountException;
    public Pools withPoolsCountException(PoolsPoolsCountExceptionEnum poolsCountException) {
        this.poolsCountException = poolsCountException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wadingPool")
    public Boolean wadingPool;
    public Pools withWadingPool(Boolean wadingPool) {
        this.wadingPool = wadingPool;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wadingPoolException")
    public PoolsWadingPoolExceptionEnum wadingPoolException;
    public Pools withWadingPoolException(PoolsWadingPoolExceptionEnum wadingPoolException) {
        this.wadingPoolException = wadingPoolException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waterPark")
    public Boolean waterPark;
    public Pools withWaterPark(Boolean waterPark) {
        this.waterPark = waterPark;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waterParkException")
    public PoolsWaterParkExceptionEnum waterParkException;
    public Pools withWaterParkException(PoolsWaterParkExceptionEnum waterParkException) {
        this.waterParkException = waterParkException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waterslide")
    public Boolean waterslide;
    public Pools withWaterslide(Boolean waterslide) {
        this.waterslide = waterslide;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waterslideException")
    public PoolsWaterslideExceptionEnum waterslideException;
    public Pools withWaterslideException(PoolsWaterslideExceptionEnum waterslideException) {
        this.waterslideException = waterslideException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wavePool")
    public Boolean wavePool;
    public Pools withWavePool(Boolean wavePool) {
        this.wavePool = wavePool;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wavePoolException")
    public PoolsWavePoolExceptionEnum wavePoolException;
    public Pools withWavePoolException(PoolsWavePoolExceptionEnum wavePoolException) {
        this.wavePoolException = wavePoolException;
        return this;
    }
}