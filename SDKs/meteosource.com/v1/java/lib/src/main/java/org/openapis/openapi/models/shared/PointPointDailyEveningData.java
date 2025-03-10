/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class PointPointDailyEveningData {
    @JsonProperty("cloud_cover")
    public PointPointDailyEveningCloudCoverData cloudCover;

    public PointPointDailyEveningData withCloudCover(PointPointDailyEveningCloudCoverData cloudCover) {
        this.cloudCover = cloudCover;
        return this;
    }
    
    /**
     * Units: metric = \u00b0C, us = \u00b0F, uk = \u00b0C, ca = \u00b0C
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dew_point")
    public Double dewPoint;

    public PointPointDailyEveningData withDewPoint(Double dewPoint) {
        this.dewPoint = dewPoint;
        return this;
    }
    
    /**
     * Units: metric = \u00b0C, us = \u00b0F, uk = \u00b0C, ca = \u00b0C
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feels_like")
    public Double feelsLike;

    public PointPointDailyEveningData withFeelsLike(Double feelsLike) {
        this.feelsLike = feelsLike;
        return this;
    }
    
    /**
     * Relative humidity. (evening avg)
     * Unit: \%
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("humidity")
    public Long humidity;

    public PointPointDailyEveningData withHumidity(Long humidity) {
        this.humidity = humidity;
        return this;
    }
    
    /**
     * Evening numeric identifier of the weather icon. The following values can appear:
     * 
     * * 1 - Not available
     * * 2 - Sunny
     * * 3 - Mostly sunny
     * * 4 - Partly sunny
     * * 5 - Mostly cloudy
     * * 6 - Cloudy
     * * 7 - Overcast
     * * 8 - Overcast with low clouds
     * * 9 - Fog
     * * 10 - Light rain
     * * 11 - Rain
     * * 12 - Possible rain
     * * 13 - Rain shower
     * * 14 - Thunderstorm
     * * 15 - Local thunderstorms
     * * 16 - Light snow
     * * 17 - Snow
     * * 18 - Possible snow
     * * 19 - Snow shower
     * * 20 - Rain and snow
     * * 21 - Possible rain and snow
     * * 22 - Rain and snow
     * * 23 - Freezing rain
     * * 24 - Possible freezing rain
     * * 25 - Hail
     * * 26 - Clear (night)
     * * 27 - Mostly clear (night)
     * * 28 - Partly clear (night)
     * * 29 - Mostly cloudy (night)
     * * 30 - Cloudy (night)
     * * 31 - Overcast with low clouds (night)
     * * 32 - Rain shower (night)
     * * 33 - Local thunderstorms (night)
     * * 34 - Snow shower (night)
     * * 35 - Rain and snow (night)
     * * 36 - Possible freezing rain (night)
     * 
     * Unit: icon
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icon")
    public Long icon;

    public PointPointDailyEveningData withIcon(Long icon) {
        this.icon = icon;
        return this;
    }
    
    /**
     * Total column of ozone. (evening avg)
     * Unit: Dobson
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ozone")
    public Double ozone;

    public PointPointDailyEveningData withOzone(Double ozone) {
        this.ozone = ozone;
        return this;
    }
    
    @JsonProperty("precipitation")
    public PointPointDailyEveningPrecipitationData precipitation;

    public PointPointDailyEveningData withPrecipitation(PointPointDailyEveningPrecipitationData precipitation) {
        this.precipitation = precipitation;
        return this;
    }
    
    /**
     * Atmospheric pressure at mean sea level. (evening avg)
     * Units: metric = hPa, us = Hg, uk = hPa, ca = kPa
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pressure")
    public Double pressure;

    public PointPointDailyEveningData withPressure(Double pressure) {
        this.pressure = pressure;
        return this;
    }
    
    @JsonProperty("probability")
    public PointPointDailyEveningProbData probability;

    public PointPointDailyEveningData withProbability(PointPointDailyEveningProbData probability) {
        this.probability = probability;
        return this;
    }
    
    /**
     * Snow depth. (evening avg)
     * Units: metric = cm, us = inch, uk = cm, ca = cm
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snow_depth")
    public Double snowDepth;

    public PointPointDailyEveningData withSnowDepth(Double snowDepth) {
        this.snowDepth = snowDepth;
        return this;
    }
    
    /**
     * Units: metric = \u00b0C, us = \u00b0F, uk = \u00b0C, ca = \u00b0C
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("soil_temperature")
    public Double soilTemperature;

    public PointPointDailyEveningData withSoilTemperature(Double soilTemperature) {
        this.soilTemperature = soilTemperature;
        return this;
    }
    
    /**
     * Units: metric = \u00b0C, us = \u00b0F, uk = \u00b0C, ca = \u00b0C
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("surface_temperature")
    public Double surfaceTemperature;

    public PointPointDailyEveningData withSurfaceTemperature(Double surfaceTemperature) {
        this.surfaceTemperature = surfaceTemperature;
        return this;
    }
    
    /**
     * Temperature 2 metres above ground. (evening avg)
     * Units: metric = \u00b0C, us = \u00b0F, uk = \u00b0C, ca = \u00b0C
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("temperature")
    public Double temperature;

    public PointPointDailyEveningData withTemperature(Double temperature) {
        this.temperature = temperature;
        return this;
    }
    
    /**
     * Visibility. (evening avg)
     * Units: metric = km, us = mi, uk = mi, ca = km
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public Double visibility;

    public PointPointDailyEveningData withVisibility(Double visibility) {
        this.visibility = visibility;
        return this;
    }
    
    /**
     * Evening day string identifier of the weather icon, e.g. `light_rain`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weather")
    public String weather;

    public PointPointDailyEveningData withWeather(String weather) {
        this.weather = weather;
        return this;
    }
    
    @JsonProperty("wind")
    public PointPointDailyEveningWindData wind;

    public PointPointDailyEveningData withWind(PointPointDailyEveningWindData wind) {
        this.wind = wind;
        return this;
    }
    
    /**
     * Temperature 2 metres above ground. (evening avg)
     * Units: metric = \u00b0C, us = \u00b0F, uk = \u00b0C, ca = \u00b0C
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wind_chill")
    public Double windChill;

    public PointPointDailyEveningData withWindChill(Double windChill) {
        this.windChill = windChill;
        return this;
    }
    
    public PointPointDailyEveningData(@JsonProperty("cloud_cover") PointPointDailyEveningCloudCoverData cloudCover, @JsonProperty("precipitation") PointPointDailyEveningPrecipitationData precipitation, @JsonProperty("probability") PointPointDailyEveningProbData probability, @JsonProperty("wind") PointPointDailyEveningWindData wind) {
        this.cloudCover = cloudCover;
        this.precipitation = precipitation;
        this.probability = probability;
        this.wind = wind;
  }
}
